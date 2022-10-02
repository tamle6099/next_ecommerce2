import connectBb from "../../../utils/connectBb";
import Products from "../../../models/productModule";

connectBb()

const getProducts = async (req, res) => {
    try{
        const products = await Products.find()
        res.json({
            status: "success",
            result:products.length,
            products
        })
    }catch(err){
        return res.status(500).json({err: err.message})
    }
}

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getProducts(req, res)
            break;
    }
}