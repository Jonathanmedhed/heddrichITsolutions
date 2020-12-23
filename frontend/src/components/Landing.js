import React, { useState, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { sendEmail as sendEmailAction } from '../actions/emailActions'

import { Carousel } from 'primereact/carousel'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'

import featureImg from './mobile-hand-bg.jpg'
import modifyContentImg from './content.png'
import cartImg from './screens/cart.jpg'
import contactImg from './screens/contact-us.jpg'
import graphSalesImg from './screens/graph-sales.jpg'
import graphSalesProductImg from './screens/graph-sales-product.jpg'
import loginImg from './screens/login.jpg'
import orderMovilImg from './screens/order-movil.jpg'
import orderImg from './screens/order.jpg'
import ordersImg from './screens/orders.jpg'
import productImg from './screens/product.jpg'
import productsImg from './screens/products.jpg'
import frameNoPadImg from './screens/frame-no-padding.png'
import frameHandImg from '../images/mobile-hand.png'
import gif from '../images/gif.gif'
import userImg from '../images/user-office.jpg'

const images = [
	{
		img: cartImg,
		title: 'Carro de Compra',
		text:
			'Ademas de mostrar la cantidad de productos y el total, tambien muestra el descuento aplicado, articulos gratis y oportunidad para descuentos.',
	},
	{
		img: contactImg,
		title: 'Contacto',
		text:
			'Muestra diferentes métodos de contacto para tus clientes, Horarios y la localización en Google Maps (Todo es Modificable).',
	},
	{
		img: graphSalesImg,
		title: 'Gráfico de Ventas',
		text: 'Monitorea tus ventas e ingresos diarios, semanales, mensuales y anuales.',
	},
	{
		img: graphSalesProductImg,
		title: 'Gráfico de Ventas por Producto',
		text: 'Monitorea las ventas e ingresos de cada producto.',
	},
	{
		img: loginImg,
		title: 'Cuentas de Usuario',
		text: 'Permite a usuarios crear cuentas para monitorear sus órdenes.',
	},
	{
		img: orderMovilImg,
		title: 'Pago Móvil',
		text: 'Recibe pagos via pago móvil.',
	},
	{
		img: orderImg,
		title: 'Información de Orden',
		text: 'Ve el estado, aprueba, anula órdenes y mucho más.',
	},
	{
		img: ordersImg,
		title: 'Listado de Ordenes',
		text: 'Ve el listado de tus órdenes por aprobar, entregar o completadas',
	},
	{
		img: productImg,
		title: 'Información de Producto',
		text: 'Muestra la información sobre el producto, cantidad en inventario y cualquier oferta disponible',
	},
	{
		img: productsImg,
		title: 'Listado de Productos',
		text: 'Muestra un listado de los productos, con descuentos aplicados, ademas de otras ofertas disponibles.',
	},
]

const Landing = () => {
	const dispatch = useDispatch()

	const [alert, setAlert] = useState(null)

	const sendEmail = useSelector((state) => state.sendEmail)
	const { loading, error, success } = sendEmail

	let infoRef = createRef()
	let priceRef = createRef()
	let contactRef = createRef()

	const goTo = (option) => {
		switch (option) {
			case 'prices':
				priceRef.current.scrollIntoView({ behavior: 'smooth' })
				break
			case 'info':
				infoRef.current.scrollIntoView({ behavior: 'smooth' })
				break
			case 'contact':
				contactRef.current.scrollIntoView({ behavior: 'smooth' })
				break
			default:
				break
		}
	}

	// Form Values
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	// Form Values Variables
	const { name, email, message } = formData

	const onChange = (e) => {
		setAlert(null)
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const itemTemplate = (item) => (
		<div className="carousel-product-info">
			<img className="carousel-mobile-img" src={item.img} alt={'carousel-img'}></img>
			<div className="content">
				<div className="inside-content">
					<h1>{item.title}</h1>
					<p>{item.text}</p>
				</div>
			</div>
		</div>
	)

	const sendEmailHandler = () => {
		setAlert(null)
		if (!name) {
			setAlert('Nombre Requerido')
		} else if (!email) {
			setAlert('Correo Requerido')
		} else if (!message) {
			setAlert('Mensaje Requerido')
		} else {
			let emailToSend = 'Usuario: ' + name + '\n' + '\n' + `Email: ` + email + '\n' + '\n' + message + ''

			dispatch(sendEmailAction('jonathanmedhed@gmail.com', `heddrich IT Solutions`, emailToSend))
		}
	}

	return (
		<>
			<Header goTo={goTo} />
			<div className="body">
				<section className="text-img-section">
					<img src={userImg} alt={'user-img'}></img>
					<div className="right">
						<div className="right-content">
							<p className="pre-title">Por que elegirnos?</p>
							<h2>Crearemos la Página Web Ideal para Su Negocio</h2>
							<p className="text">
								En <strong>heddrict IT soluciones</strong> creamos páginas web{' '}
								<strong>fáciles de usar y entender</strong>,{' '}
								<strong>completamente customizables</strong>, otorgándote{' '}
								<strong>herramientas esenciales</strong> para el manejo de tu negocio
							</p>
						</div>
					</div>
				</section>
				<section className="sm-sections">
					<div className="sm-section">
						<i className="fas fa-map-marker-alt"></i>
						<h2>Llegar a Más Clientes</h2>
						<p>
							Llega a clientes que nunca antes podrías haber alcanzado, ya sea debido a distancia, o
							simplemente desconocimiento de la localización de su tienda.
						</p>
					</div>
					<div className="sm-section">
						<i className="far fa-credit-card"></i>
						<h2>Diferentes Modos de Pago</h2>
						<p>
							Ofrece diferentes métodos de pagos como <strong>Pago Móvil</strong>,{' '}
							<strong>Efectivo en $ o Bs</strong> o a través de <strong>Mercado Libre</strong>.
						</p>
					</div>
					<div className="sm-section">
						<i className="fas fa-edit"></i>
						<h2>Contenido Customizable</h2>
						<p>
							Elige como mostrar el contenido de tu página web, agrega nuevos productos y customiza la
							información mostrada a los clientes.
						</p>
					</div>
					<div className="sm-section">
						<i className="fas fa-chart-line"></i>
						<h2>Monitoreo de Ventas</h2>
						<p>
							Sigue de cerca la actividad de tus productos, el número de ventas y el ingreso percibido por
							tu tienda.
						</p>
					</div>
				</section>
				<section ref={infoRef} className="features-img">
					<div className="left-content">
						<div className="left-inside">
							<div className="feat">
								<h2>
									<i className="fas fa-caret-right"></i> Ofertas
								</h2>
								<p>Ofrece descuentos, combos como 'Lleva 3 y paga 2' y más.</p>
							</div>
							<div className="feat">
								<h2>
									<i className="fas fa-caret-right"></i> Bs y Divisas
								</h2>
								<p>Muestra el precio de tus products en Bs y en $ con un solo click.</p>
							</div>
							<div className="feat">
								<h2>
									<i className="fas fa-caret-right"></i> Categorias y Marcas
								</h2>
								<p>Muestra tus productos por categoria o por marca.</p>
							</div>
						</div>
					</div>
					<div className="right-content">
						<img src={featureImg} alt="phone-header"></img>
					</div>
				</section>
				<section className="features-img-rev">
					<div className="left-content">
						<div className="img-container">
							<img src={modifyContentImg} alt="phone-header"></img>
						</div>
					</div>
					<div className="right-content">
						<div className="right-inside">
							<div className="feat">
								<i className="far fa-edit"></i>
								<h1>Actualiza el Contenido e Información</h1>
								<p>
									<i className="fas fa-search-dollar"></i> Actualiza el valor del dolar.
								</p>
								<p>
									{' '}
									<i className="fas fa-truck"></i> Modifica el costo y tiempo de envío{' '}
								</p>
								<p>
									<i className="far fa-file-alt"></i> Cambia el contenido de la pagina principal.
								</p>
								<p>
									<i class="fas fa-ellipsis-h"></i> Y mucho más...
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="text-section mb-1">
					<p className="pre-title">Galería</p>
					<h1>Más Características</h1>
					<div className="sm-line"></div>
				</section>
				<section className="carousel-section">
					<img className="frame" src={frameNoPadImg} alt={'frame'}></img>
					<Carousel
						value={images}
						itemTemplate={itemTemplate}
						numVisible={1}
						numScroll={1}
						circular={true}
					></Carousel>
				</section>
				<section ref={priceRef} className="cost-section">
					<div className="section-content">
						<div className="info">
							<div className="content">
								<i className="far fa-credit-card"></i>
								<h1>Precios Según tus Nececidades</h1>
								<p>Elige la página web que mejor se aplique a tu negocio</p>
							</div>
						</div>
						<div className="basic-info">
							<p className="pre-title">Básica</p>
							<h1>
								$200 <span>(pago único)</span>
							</h1>
							<p className="content">
								Una página web con las funciones principales, sin modificaciones extras
							</p>
							<div className="list">
								<p className="item">
									<i class="fas fa-check-circle"></i> Todas las funciones mostradas
								</p>
								<p className="item">
									<i class="fas fa-check-circle"></i> Sin modificaciones extras
								</p>
								<p className="item">
									<i class="fas fa-check-circle"></i> Vistas para PC y Móvil
								</p>
							</div>
							<button
								onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
								className="btn btn-primary"
							>
								Ordenar
							</button>
						</div>
						<div className="premium-info">
							<div className="top">
								<p className="pre-title">Customizada</p>
								<h1>
									$200+ <span>(pago único)</span>
								</h1>
							</div>
							<div className="bottom">
								<p className="content">Una página web diseñada especialmente para tu tienda</p>
								<div className="list">
									<p className="item">
										<i class="fas fa-check-circle"></i> Colores y estilo ligados a tu marca
									</p>
									<p className="item">
										<i class="fas fa-check-circle"></i> Funciones extras
									</p>
									<p className="item">
										<i class="fas fa-check-circle"></i> Secciones extras
									</p>
									<p className="item">
										<i class="fas fa-check-circle"></i> Vistas para PC y Móvil
									</p>
									<p className="item">
										<i class="fas fa-check-circle"></i> y más...
									</p>
								</div>
								<button
									onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
									className="btn btn-primary"
								>
									Ordenar
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className="features-gif">
					<div className="left-content">
						<div className="left-inside">
							<div className="feat">
								<i className="far fa-hand-point-right hide-sm"></i>
								<i className="far fa-hand-point-down show-sm"></i>
								<h2>La Forma Más Sencilla de Comprar</h2>
								<p>Permite comprar a tus clientes con tan solo unos clicks.</p>
							</div>
						</div>
					</div>
					<div className="right-content">
						<div className="inside">
							<img src={frameHandImg} alt="phone-header"></img>
							<img src={gif} alt="phone-gif"></img>
						</div>
					</div>
				</section>
				<section ref={contactRef} className="contact-section">
					{success ? (
						<div className="success-info">
							<h1>Gracias por Contactarnos</h1>
							<p>Te estaremos contactando en las proximas horas.</p>
						</div>
					) : (
						<>
							<h1>Contáctanos</h1>
							<p>Quieres una página? Tienes preguntas? Escríbenos</p>
							<form>
								<div className="form-group">
									<label>Nombre</label>
									<input
										type="name"
										placeholder="Ingresar nombre"
										value={name}
										name="name"
										onChange={(e) => onChange(e)}
									></input>
								</div>

								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										placeholder="Ingresar email"
										value={email}
										name="email"
										onChange={(e) => onChange(e)}
									></input>
								</div>

								<div className="form-group">
									<label>Mensaje</label>
									<textarea
										placeholder="Ingresar mensaje"
										value={message}
										name="message"
										onChange={(e) => onChange(e)}
										rows={6}
									></textarea>
								</div>
								{loading ? (
									<Loader />
								) : (
									<div onClick={() => sendEmailHandler()} className="btn btn-primary mt-1">
										Enviar
									</div>
								)}
								{alert ? <span className="error-msg">{alert}</span> : <></>}
								{error ? <span className="error-msg">{error}</span> : <></>}
								{success ? <span className="success-msg">Mensaje Enviado</span> : <></>}
							</form>
						</>
					)}
				</section>
			</div>
			<Footer />
		</>
	)
}

export default Landing
