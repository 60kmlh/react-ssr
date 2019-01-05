import express from 'express'
import fs from 'fs'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import React from 'react'
import App from './src/App'

import { getInitCount } from './src/utils/fetchData'

var app = express()
app.use(express.static('dist'));

app.get('/*', (req, res) => {
  getInitCount().then(resData => {
    const renderedString = renderToString(
        <StaticRouter location={req.url}>
          <App initCount={resData} />
        </StaticRouter>
      )
  
    fs.readFile(path.resolve('index.html'), 'utf8', (error, data) => {
      if(error) {
        console.log(error)
        res.send('<p>Error!</p>')
        return false
      }

      res.send(`${data
        .replace('<div id="app"></div>', `<div id="app">${renderedString}</div>`)
        .replace('</body>', `</body><script>window.__initCount__ = ${JSON.stringify(resData)}</script>`)}`)
    })
  })
})

app.listen(8000)
