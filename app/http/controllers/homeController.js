const controller = require("app/http/controllers/controller");
const Product = require("app/models/product")
const Category = require("app/models/category")

class homeController extends controller {
  async products(req, res)
  { 
    try { 
    const { title , percentages , category } = req.body
    const newProduct = await Product.create({ title , percentages , category });
    return res.json(newProduct)
  } 
  catch(error) 
  {
    return res.json(error)
  }

  }

  async categories(req, res)
  { 
    try { 
      const { title  , percentages , parent } = req.body
      const newCategory = await Category.create({ title  , percentages , parent });
      return res.json(newCategory)
    } 
    catch(error) 
    {
      return res.json(error)
    }
  
  }

  async percentages(req, res)
  { 
    try 
    { 
    const { productId } = req.body
    const product = await Product.findByPk(productId);
    if (!product)
    {
      return res.json('Product Not found!');
    }
     else if (product.percentages > 0) 
     {
      return res.json({
        message:true,
        product
      })
     }
     else if(product.category){
      const category = await Category.findByPk(product.category);
      if (!category) {
        return res.json({
          message:false,
          product
        })
      }
      else if(category.percentages > 0 )
      {
        return res.json({
          message:true,
          product
        })
      }
      else if(category.parent)
      {
        const parent = await Category.findByPk(category.parent);
        if (!parent) 
        {
          return res.json({
            message:false,
            product
          })
        }
        else if(parent.percentages > 0) 
        {
          return res.json({
            message : true,
            product
          })
        }
        else
         {
          return res.json({
            message:false,
            product
          })
        }
      }
      return res.json({
        message:false,
        product
      })
     }
     else
     {
      return res.json({
        message:false,
        product
      })
     }
    
  } 
  catch(error) 
  {
    return res.json(error)
  }
  
  }
}

module.exports = new homeController();
