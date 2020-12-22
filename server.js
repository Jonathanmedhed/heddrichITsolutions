import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import emailRoutes from './routes/emailRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/email', emailRoutes)

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))
	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
	app.get('/', (req, res) => {
		res.send('API is running...')
	})
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
