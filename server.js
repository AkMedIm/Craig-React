const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js')
const citiesData = require('./data/cities.js')
const itemsData = require('./data/items.js')


//create express app
const app = express()

//create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname,'/public')))

//API
app.get('/api/categories', function(req, res){
  res.json(categoriesData)
})


//all cities
app.get('/api/cities', function(req, res){
  res.json(citiesData)
})

//all categories by city
app.get('/api/:city', function(req, res){
  res.json(categoriesData)
})

// all items for the category
app.get('/api/:city/:category', function(req, res){
  console.log(req.params.city)
  // const newData = itemsData.filter( (item) => {
  //   return item.city == req.params.city && item.category == req.params.category
  // } )
  let newData;
  if(req.query.min_price != undefined){
    newData = itemsData.filter((item) =>  {
      return item.city == req.params.city && item.category == req.params.category && item.price >= req.query.min_price && item.price <= req.query.max_price
  })
}
  else{
    newData = itemsData.filter((item) =>{
      return item.city == req.params.city && item.category == req.params.category

})
 }
  res.json(newData)
})

//show all the items for a listing
app.get('/api/:city/:category/:listing', function(req, res){
  console.log(req.params.city)
  // const newData = itemsData.filter( (item) => {
  //   return item.city == req.params.city && item.category == req.params.category
  // } )
  let newData;
  if(req.query.min_price != undefined){
    newData = itemsData.filter((item) =>  {
      return item.city == req.params.city && item.category == req.params.category && item.listing == req.params.listing && item.price >= req.query.min_price && item.price <= req.query.max_price
  })
}
  else{
    newData = itemsData.filter((item) =>{
      return item.city == req.params.city && item.category == req.params.category && item.listing == req.params.listing

})
 }
  res.json(newData)
})

//shows the selected item
app.get('/api/:city/:category/:listing/:item', function(req, res){
let newData;
newData = itemsData.filter( (item) => {
  return item.city == req.params.city && item.category == req.params.category && item.listing == req.params.listing && item.title == req.params.item
} )
  res.json(newData)
})

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

// create default port to serve the app
const port = process.env.PORT || 5000
app.listen(port)

console.log('server started on port: ' + port)
