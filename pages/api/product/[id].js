import connectBb from "../../../utils/connectBb";
import Products from "../../../models/productModule";

connectBb()

const getProduct = async (req, res) => {
    try{
        const {id} =req.query;

        const product = await Products.findById(id)
        if(!product) return res.status(400).json({err: "This product does not exits."})
        res.json({product})
    }catch(err){
        return res.status(500).json({err: err.message})
    }
}

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getProduct(req, res)
            break;
    }
}